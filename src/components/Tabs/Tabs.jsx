
export const Tabs = ({ pagina, idAtivo, setIdAtivo }) => {
    return (
        <div data-cy="TabsComponent">
            <h1 className="title">Selected tab is {pagina.find(pag => pag.id === idAtivo)?.title}</h1>
            <div className="tabs is-boxed">
                <ul>
                    {pagina.map((pag) => (
                        <li
                            onClick={(e) => {e.preventDefault(); setIdAtivo(pag.id)}}
                            className={pag.id === idAtivo ? 'is-active' : ''}
                            key={pag.id}
                        >
                            <a>{pag.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <p>{pagina.find(pag => pag.id === idAtivo)?.content}</p>
        </div>
    )
};
