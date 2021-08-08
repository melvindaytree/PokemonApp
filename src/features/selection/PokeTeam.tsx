import React, { useState } from 'react'
import './PokeGrid.css'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import { useFetchPokemonQuery, useGetPokemonByNameQuery } from '../pokeApiSlice'
import { removePokemon } from './teamSelectSlice'
import PokeGridBox from './PokeGridBox'

function PokeTeam() {



    //if Im on the teams page set the icon to the back sprite

    let [PokeArrayCounter, setPokeArrayCounter] = useState(1)

    const dispatch = useAppDispatch();

    const userPokeTeam = useAppSelector((state) => state.teamSelect);
  
    const { data: pokemon, isFetching, isLoading } = useGetPokemonByNameQuery(userPokeTeam.names[0])
    const { data: pokemon2, isFetching2, isLoading2 } = useGetPokemonByNameQuery(userPokeTeam.names[1])
    const { data: pokemon3, isFetching3, isLoading3 } = useGetPokemonByNameQuery(userPokeTeam.names[2])
    const { data: pokemon4, isFetching4, isLoading4 } = useGetPokemonByNameQuery(userPokeTeam.names[3])
    const { data: pokemon5, isFetching5, isLoading5 } = useGetPokemonByNameQuery(userPokeTeam.names[4])
    const { data: pokemon6, isFetching6, isLoading6 } = useGetPokemonByNameQuery(userPokeTeam.names[5])
    //let imgurl = pokemon?.sprites?.front_default



    const handleClickRemovePokemon = (id) => {
        dispatch(removePokemon(id));
        console.log(userPokeTeam)
      }


    return (
        <div className="marginBottom">

            {pokemon != null ? <PokeGridBox 
                name={pokemon?.name}
                id={pokemon?.id}
                imgurl={pokemon?.sprites?.front_default}
                buttonFunction={() => handleClickRemovePokemon(0)}

            /> : <div id="Pokemon1" className="pokegrid"></div>}

            {pokemon2 != null ? <PokeGridBox 
                name={pokemon2?.name}
                id={pokemon2?.id}
                imgurl={pokemon2?.sprites?.front_default}
                buttonFunction={() => handleClickRemovePokemon(1)}

            /> : <div id="Pokemon1" className="pokegrid"></div>}

            {pokemon3 != null ? <PokeGridBox 
                name={pokemon3?.name}
                id={pokemon3?.id}
                imgurl={pokemon3?.sprites?.front_default}
                buttonFunction={() => handleClickRemovePokemon(2)}

            /> : <div id="Pokemon1" className="pokegrid"></div>}

            {pokemon4 != null ? <PokeGridBox 
                name={pokemon4?.name}
                id={pokemon4?.id}
                imgurl={pokemon4?.sprites?.front_default}
                buttonFunction={() => handleClickRemovePokemon(3)}

            /> : <div id="Pokemon1" className="pokegrid"></div>}

            {pokemon5 != null ? <PokeGridBox 
                name={pokemon5?.name}
                id={pokemon5?.id}
                imgurl={pokemon5?.sprites?.front_default}
                buttonFunction={() => handleClickRemovePokemon(4)}

            /> : <div id="Pokemon1" className="pokegrid"></div>}

            {pokemon6 != null ? <PokeGridBox 
                name={pokemon6?.name}
                id={pokemon6?.id}
                imgurl={pokemon6?.sprites?.front_default}
                buttonFunction={() => handleClickRemovePokemon(5)}

            /> : <div id="Pokemon1" className="pokegrid"></div>}




            {/* <PokeGridBox 
                name={pokemon?.name}
                id={pokemon?.id}
                imgurl={pokemon?.sprites?.front_default}
                buttonFunction={() => handleClickRemovePokemon(0)}

            />
            <PokeGridBox 
                name={pokemon2?.name}
                id={pokemon2?.id}
                imgurl={pokemon2?.sprites?.front_default}
                buttonFunction={() => handleClickRemovePokemon(1)}
            
            />
             <PokeGridBox 
                name={pokemon3?.name}
                id={pokemon3?.id}
                imgurl={pokemon3?.sprites?.front_default}
                buttonFunction={() => handleClickRemovePokemon(2)}
            
            />
            <PokeGridBox 
                name={pokemon4?.name}
                id={pokemon4?.id}
                imgurl={pokemon4?.sprites?.front_default}
                buttonFunction={() => handleClickRemovePokemon(3)}
            
            />
            <PokeGridBox 
                name={pokemon5?.name}
                id={pokemon5?.id}
                imgurl={pokemon5?.sprites?.front_default}
                buttonFunction={() => handleClickRemovePokemon(4)}
            
            />
            <PokeGridBox 
                name={pokemon6?.name}
                id={pokemon6?.id}
                imgurl={pokemon6?.sprites?.front_default}
                buttonFunction={() => handleClickRemovePokemon(5)}
            
            /> */}
        </div>
    )
}

export default PokeTeam