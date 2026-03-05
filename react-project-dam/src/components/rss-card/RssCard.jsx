import "./RssCard.css";

const RssCard = ({ title, description, link, image }) => {
    return (
        <article className="rss-card">

            {image && (
                <img src={image} alt={title} className="rss-card__image" />
            )}

            <h3 className="rss-card__title">{title}</h3>

            <p
                className="rss-card__description"
                dangerouslySetInnerHTML={{ __html: description }}
            />

            <a href={link} target="_blank" className="rss-card__link">
                Leer noticia
            </a>

        </article>
    );
};

export default RssCard;