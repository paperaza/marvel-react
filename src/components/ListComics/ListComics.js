import { Card, Icon, Image, Dimmer, Loader, Button } from "semantic-ui-react";
import "./ListComics.scss";
export default function ListComics({ listComics, renderComics, setRenderComics }) {
    const { loading, result } = listComics;
    if (loading || !result) {
        return (
            <Dimmer active inverted>
                <Loader inverted>Loading Comics...</Loader>
            </Dimmer>
        );
    }

    const { results } = result.data;
    //console.log(results);
    const loadMoreComics = () => {
        const numberComics = renderComics;
        setRenderComics(numberComics + 5);
    };

    return (
        <Card.Group itemsPerRow={5}>
            {results.map((res, index) => (
                <Card key={index} className="list-comics">
                    <Image
                        src={`${res.thumbnail.path}.${res.thumbnail.extension}`}
                        wrapped
                        ui={false}
                    />
                    <Card.Content>
                        <Card.Header>{res.title}</Card.Header>
                        <Card.Meta>
                            <span>Digital ID: {res.id}</span>
                        </Card.Meta>
                    </Card.Content>
                    <Card.Content>

                        <Button
                            animated
                            fluid
                            as="a"
                            href={res.urls[0].url}
                            target="_blank"
                            color="black"
                        >
                            <Button.Content visible>Más información</Button.Content>
                            <Button.Content hidden>
                                <Icon name="arrow right" />
                            </Button.Content>
                        </Button>
                    </Card.Content>
                </Card>
            ))}
            <div className="container-button">
                <Button color="red" onClick={() => loadMoreComics()}>
                    <Icon name="plus" />Cargar más Comics
                </Button>
            </div>
        </Card.Group>
    );
}
