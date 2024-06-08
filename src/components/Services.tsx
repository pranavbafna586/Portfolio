import services from '../services.ts'


interface Service {
    image: string;
    altText: string;
    name: string;
    description: string;
}

const Services = () => {
    return (
        <div >
            <h2 className='text-primary font-semibold text-3xl mt-14'>
                The services that I offer
            </h2>
            <div className='grid md:grid-cols-3 gap-5 my-8'>
                {
                    services.map((serv: Service, i: number) => {
                        return (
                            <div key={i} className='service-card flex flex-col justify-center items-center p-6 text-center text-white'>
                                <img src={serv.image} alt={serv.altText} />
                                <h5 className='text-primary font-semibold text-3xl mt-14'>{serv.name}</h5>
                                <p className='text-primary font-semibold text-lg'>
                                    {serv.description}
                                </p>
                            </div>
                        )
                    })


                }
            </div>

        </div>
    );
};

export default Services;