
export default function MegaCategoryMenu(props) {

    //console.log(`MegaCategoryMenu: ${JSON.stringify(props)}`)

    let distinctCategory = (props) => {
        let unique_values = props?.categories
            .map((item) => item?.fields?.category)
            .filter(
                (value, index, current_value) => current_value.indexOf(value) === index
            );
        return unique_values;
    };

    //console.log(`Categories: ${distinctCategory(props)}`)
    let prdCategories = distinctCategory(props)

    return (
        <>
            <div className="mega-category-menu">
            <span className="cat-button">
                <i className="lni lni-menu" />
                All Categories
            </span>
            <ul className="sub-category">
                <li>
                <a href="/search">
                    Electronics <i className="lni lni-chevron-right" />
                </a>
                <ul className="inner-sub-category">
                    {
                        prdCategories && prdCategories.map(category => (
                            <li>
                                <a href={`/search?mvp_products%5BrefinementList%5D%5Bcategory%5D%5B0%5D=${category}`}>{category}</a>
                            </li>
                        ))
                    }
                </ul>
                </li>
            </ul>
            </div>

        </>
    )
}