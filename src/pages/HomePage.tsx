import { useEffect, useRef, useState } from 'react';
import ButtonField from '../components/ButtonField';
import TextField from '../components/TextField';
import LoadingLayout from '../layouts/LoadingLayout';
import { Pizza } from '../models/Pizza.model';
import CardPizza from '../sections/CardPizza';

function HomePage() {
    const [pizzas, setPizzas] = useState<Pizza[]>([]);
    const [filteredPizzas, setFilteredPizzas] = useState<Pizza[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState<number>(1);
    const [searchText, setSearchText] = useState<string>('');

    const searchRef = useRef<any>(null);

    const onChange = (value: string) => {
        clearTimeout(searchRef.current);
        searchRef.current = setTimeout(() => {
            setSearchText(value);
        }, 1000);
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(
                    `http://localhost:4000/products/home/pagination?page=${page}&search=`
                );
                const data = await response.json();
                setPizzas((prev) => {
                    const newPizzas = data.data.filter(
                        (item: Pizza) => !prev.some((pizza) => pizza.id === item.id)
                    );
                    return [...prev, ...newPizzas];
                });
                setFilteredPizzas((prev) => {
                    const newFiltered = data.data.filter(
                        (item: Pizza) => !prev.some((pizza) => pizza.id === item.id)
                    );
                    return [...prev, ...newFiltered];
                });
            } catch (error) {
                console.error('Error fetching pizzas:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [page]);
    

    useEffect(() => {
        if (searchText) {
            const filtered = pizzas.filter((item) =>
                item.productName
                    ?.toLocaleUpperCase()
                    .includes(searchText.toLocaleUpperCase())
            );
            setFilteredPizzas(filtered);
        } else {
            setFilteredPizzas(pizzas); // Reset về dữ liệu ban đầu
        }
    }, [searchText, pizzas]);

    return (
        <LoadingLayout isLoading={!pizzas.length}>
                    <div>
                        <div style={{ marginBottom: '100px' }}>
                            <TextField placeholder="Input text" onChange={onChange} />
                        </div>
                        <div className="wrapper-card-items">
                            {(filteredPizzas || []).map((item, index) => (
                                <CardPizza
                                    key={index}
                                    id={item.id}
                                    productName={item.productName}
                                    description={item.description}
                                />
                            ))}
                        </div>

                        {!searchText && (
                            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                                <ButtonField
                                    loading={isLoading}
                                    onClick={() => {
                                        setPage(page + 1);
                                    }}
                                >
                                    Show more
                                </ButtonField>
                            </div>
                        )}
                    </div>

        </LoadingLayout>
    );
}

export default HomePage;
