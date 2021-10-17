const Loader = () => {
	return (
		<div className='fixed-top w-100 h-100 d-flex justify-content-center align-items-center bg-opacity-75 bg-white'>
			<div class='spinner-border text-info' role='status'>
				<span class='visually-hidden'>Loading...</span>
			</div>
		</div>
	);
};

export default Loader;
