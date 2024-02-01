"use client";

const error = ({ error }: { error: Error }) => {
	console.log(error);
	return (
		<div className="mx-auto w-96 border rounded py-2 px-4 border-error">
			<p className="text-error">{error.message}</p>
		</div>
	);
};

export default error;
