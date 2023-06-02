import {Card, Icon, Image, Dimer, Loader, Button, Dimmer} from 'semantic-ui-react';
import "./LastEvents.scss";
export default function LastEvents({lastEventsFetch}) {
    const {loading, result} = lastEventsFetch;
    if (loading || !result)
    return (//este return nos da el efecto de recargando la pagina
      <Dimmer active inverted>
        <Loader inverted>Loading...</Loader> 
      </Dimmer>
    );
    
    //Me trae los 5 resultados solo las imagenes,Card.Contet trae los titulos de los personajes
    //Boton interactivo
    const {results} = result.data;
    return results.map((event, index)=>(
        
        <Card key={index} className='last-event'>
            <Image
                src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
                wraooed ui={false}/>
            <Card.Content>
                <Card.Header>{event.title}</Card.Header>
                <Card.Meta>
                    <span>
                        <Icon name='book'/>
                        {event.comics}Comics
                    </span>
                </Card.Meta>
                <Card.Description>{event.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button 
                animated 
                fluid
                as="a"
                href={event.urls[0].url}
                target="_blank"
                color='black'
                >
                    <Button.Content visible>Ver Evento</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right'/>
                    </Button.Content>
                </Button>
            </Card.Content>
        </Card>
        
    )); 
}
