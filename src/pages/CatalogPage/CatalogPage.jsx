import { useEffect, useState } from "react";
import { getCatalog } from "../../redux/services/mockapi.js"; // Імпорт функції для отримання даних
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const [cars, setCars] = useState([]); // Стан для зберігання автомобілів
  const [page, setPage] = useState(1); // Стан для відстеження поточної сторінки

  useEffect(() => {
    // Завантаження даних після рендерингу
    const fetchCars = async () => {
      try {
        const data = await getCatalog(page); // Виклик API для отримання автомобілів
        setCars((prevCars) => [...prevCars, ...data]); // Оновлення стану, додавання нових авто
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, [page]); // Оновлювати дані, коли змінюється сторінка

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); // Завантажити більше сторінок
  };

  return (
    <div>
      <h1>Catalog</h1>
      <div className={css.catalog_grid}>
        {cars.map((car) => (
          <div key={car.id} className={css.car_card}>
            <img src={car.img} alt={car.model} />
            <h2>
              {car.make} {car.model}
            </h2>
            <p>Price: {car.rentalPrice} USD/hour</p>
            <p>Mileage: {car.mileage.toLocaleString()} km</p>
            <button>Learn more</button>
          </div>
        ))}
      </div>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default CatalogPage;
