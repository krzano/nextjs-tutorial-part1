const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="max-w-xl">
			<div className="bg-green-950 px-10 py-6 rounded-box flex place-content-center gap-2">
				<h1 className="font-medium text-5xl">Cocktails DB</h1>
			</div>
			{children}
		</div>
	);
};
export default layout;
