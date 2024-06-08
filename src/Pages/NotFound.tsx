import Header from '../components/Header';

const NotFound = () => {
    return (
        <div>
            <Header />
            <div className="container flex justify-center items-center mx-auto px-4 h-screen">
                <div className="text-center">
                    <h4 className="text-3xl font-semibold text-white">404</h4>
                    <h5 className="text-lg mt-0 mb-0 text-white">
                        Page not found
                    </h5>
                    <a href='/'> <button className='btn bg-primary py-2 px-4 text-white rounded hover:bg-white hover:text-primary transition-all duration-500'>Go Back</button></a>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
