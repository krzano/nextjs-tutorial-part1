import { Drink } from "@/app/drinks/page";
import Image from "next/image";
import Link from "next/link";

const DrinksList = ({ drinks }: { drinks: Drink[] }) => {
	return (
		<ul className="grid sm:grid-cols-2 gap-6 mt-6">
			{drinks.map((drink) => (
				<li key={drink.idDrink}>
					<Link href={`drinks/${drink.idDrink}`}>
						<div className="relative h-48 mb-4">
							<Image
								src={drink.strDrinkThumb}
								alt=""
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="rounded-md object-cover"
							/>
						</div>
						{drink.strDrink}
					</Link>
				</li>
			))}
		</ul>
	);
};
export default DrinksList;
