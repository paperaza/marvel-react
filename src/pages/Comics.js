import { useState } from "react";
import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListComics from "../components/ListComics";
import useFetch from "../hooks/useFetch";

export default function Comics() {

    const uri = process.env.REACT_APP_URL_BASE;
    const k = process.env.REACT_APP_API_KEY_MARVEL;
    const has = process.env.REACT_APP_HASH_ID;

    const [renderComics, setRenderComics]= useState(10);
    const listComics= useFetch(`${uri}/comics?ts=1&apikey=${k}&hash=${has}&limit=${renderComics}`);
    //console.log(listComics);
    return(
        <div className="comics-page">
            <div id="slide-comics-image"/>
            <Grid>
                <Grid.Column>
                    <Container bg="light">
                        <Header as="h2">Los mejores Comics</Header>
                        <ListComics 
                            listComics={listComics}
                            renderComics={renderComics}
                            setRenderComics={setRenderComics}    
                        />
                    </Container>
                </Grid.Column>
            </Grid>
            
        </div>
    );
}

