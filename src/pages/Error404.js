import {Grid, Header, Image, Button} from 'semantic-ui-react';

export default function Error404() {
    return (
        <div id="error404-image">
            <Grid container columns="2">
                <Grid.Column>
                    
                </Grid.Column>
                <Grid.Column>
                    <p className="error-404">Error 404 No se encontró la página</p>
                        <Button color="red" href="./inicio">Volver al Inicio</Button>
                </Grid.Column>
            </Grid>
        </div>

    );

}
