import { Card, Dimmer, Image, Loader, Icon, Button } from "semantic-ui-react";
import "./ListSeries.scss";
export default function ListSeries({ listSeries }) {
    const { loading, result } = listSeries; //aca se optiene o recrgando o el resultado
    if (loading || !result) {
        return (
            <Dimmer active inverted>
                <Loader>Cargando Series...</Loader>
            </Dimmer>
        )
    }
    //console.log(result);
    const { results } = result.data;
    return (
        <Card.Group itemsPerRow={5}>
            {results.map((res, index) => (
                <Card key={index} className="list-series">
                    <Image
                        src={`${res.thumbnail.path}.${res.thumbnail.extension}`}
                        wrapped
                        alt={res.title}
                        ui={false}
                    />
                    <Card.Content>
                        <Card.Header>{res.title}</Card.Header>
                        <Card.Meta>
                            <span>
                                <Icon name="user" /> {res.creators.available}
                            </span>
                        </Card.Meta>
                        <Card.Meta>
                            <span>
                                <Icon name="rebel" /> {res.id}
                            </span>
                        </Card.Meta>
                        <Card.Description>{res.description}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button
                            animated
                            fluid
                            as="a"
                            href={res.urls[0].url}
                            target="_blank"
                            color='black'
                        >
                            <Button.Content visible>Más Informacion</Button.Content>
                            <Button.Content hidden>
                                <Icon name="arrow right"></Icon>
                            </Button.Content>
                        </Button>
                    </Card.Content>
                </Card>
            ))}
        </Card.Group>
    );
}
