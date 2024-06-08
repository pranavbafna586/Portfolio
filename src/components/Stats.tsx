
const stats = [
    { id: 1, name: 'Content Curator', url: '/assets/logos/gdsc_logo.png' },
    { id: 2, name: 'My Personal Articles', url: '/assets/logos/hashnode_logo.png' },
    { id: 3, name: 'Contributor', url: '/assets/logos/wtd_kenya_logo.png' },
]

export default function Stats() {
    return (
        <div className="px-7 md:px-10 my-8 ">
            <h1 className='text-3xl mt-5 text-primary font-semibold text-center'>Special Thanks to</h1>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={crypto.randomUUID()} className="stats-card mx-auto flex max-w-xs flex-col gap-y-4 py-2">
                            <dt className="text-base leading-7 text-white py-4">{stat.name}</dt>
                            <dd className="py-4 order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                                <img style={{
                                    width: "100%",
                                    objectFit: "contain",
                                    alignSelf: "center",
                                    maxHeight: 150,
                                    borderRadius: 12,
                                }} src={stat.url} alt={stat.name} />
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}