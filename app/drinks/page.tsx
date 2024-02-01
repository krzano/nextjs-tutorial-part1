import DrinksList from "@/components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
export interface Drink {
	idDrink: string;
	strDrink: string;
	strDrinkThumb: string;
	strInstructions: string;
}

const fetchDrinks = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error("Failed to fetch drinks");
	}
	const data: { drinks: Drink[] } = await response.json();
	return data;
};

const DrinksPage = async () => {
	const data = await fetchDrinks();
	console.log(data);
	return (
		<div>
			<DrinksList drinks={data.drinks} />
		</div>
	);
};
export default DrinksPage;
