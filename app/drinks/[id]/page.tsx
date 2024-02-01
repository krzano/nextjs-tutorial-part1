import Link from "next/link";
import { Drink } from "../page";
import drinkImg from "./drink.jpg";
import Image from "next/image";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id: string) => {
	const response = await fetch(`${url}${id}`);
	if (!response.ok) {
		throw Error("Failed to fetch the drink...");
	}
	const data: { drinks: Drink[] } = await response.json();
	return data.drinks[0];
};

const SingleDrinkPage = async ({
	params: { id },
}: {
	params: { id: string };
}) => {
	const drink = await getSingleDrink(id);
	return (
		<div className="py-4">
			<Link
				href={"/drinks"}
				className="btn mb-10 border border-green-950 hover:text-green-300 hover:border-green-300">
				{"<"}{" "}
				<span className="inline-block first-letter:capitalize">
					back to drinks
				</span>
			</Link>
			<div className="card mx-auto w-96 bg-base-100 shadow-xl">
				<figure className="max-h-96">
					<Image
						src={drink.strDrinkThumb}
						alt={drink.strDrink}
						width={500}
						height={500}
						priority
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title text-2xl">{drink.strDrink}</h2>
					<p>{drink.strInstructions}</p>
				</div>
			</div>
		</div>
	);
};
export default SingleDrinkPage;
