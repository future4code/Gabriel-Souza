import React, { useState } from "react";

import { 
  PostContainer, 
  PostHeader, 
  UserPhoto, 
  PostPhoto, 
  PostFooter, 
  CommentContainer 
} from './styles';

import IconeComContador from '../IconeComContador/IconeComContador';
import SecaoComentario from '../SecaoComentario/SecaoComentario';

import iconeCoracaoPreto from '../../img/favorite.svg';
import iconeCoracaoBranco from '../../img/favorite-white.svg';
import iconeComentario from '../../img/comment_icon.svg';

const Post = ( props ) => {

  // States
  const [ curtido, setCurtido ] = useState( false );
  const [ numeroCurtidas, setNumeroCurtidas ] = useState( 0 );
  const [ comentando, setComentando ] = useState( false );
  const [ comentarios, setComentarios ] = useState( [] );
  const [ numeroComentarios, setNumeroComentarios ] = useState( 0 );
  // ------------------------------------------------------------------------------------------------

  const onClickCurtida = () => {
    
    // verifica se, no estado, cutido é true ou false
    if ( !curtido ) {

      // se for true, entra nesse caso, e o estado é modificado de acordo com esses comandos:
        setCurtido( !curtido );
        setNumeroCurtidas( numeroCurtidas + 1 );

    } else {

      // se for false, entra nesse caso, e o estado é modificado de acordo com esses comandos:
      setCurtido( !curtido );
      setNumeroCurtidas( numeroCurtidas - 1 );

  };
};

  // método chamado quando o ícone de comentário é clicado. O método apenas muda o valor de 
  // comentando no estado, de true para false ou de false para true.
  const onClickComentario = () => {
    setComentando( !comentando );
  };

  // recebe como parâmetro um comentário, que vem do componente SecaoComentario. Com esse parâmetro, o método
  // o inclui na lista de comentários do estado, com a desestruturacao e o this.setState. 
  const enviarComentario = (comentario) => {
    
    const listaDeComentarios = [...comentarios, comentario];

    setComentarios( listaDeComentarios );

    if (comentario.length){
      setComentando( false );
      setNumeroComentarios( numeroComentarios + 1 );
    };
  };

    // De acordo com a propriedade curtido do estado, o valor muda entre  iconeCoracaoPreto e o iconeCoracaoBranco, 
    // que estão sendo importados nas linhas 7 e 8, respectivamente. 
    const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco);

    // expressão condicional que, de acordo com o valor de comentando no estado, renderiza o componente
    // SecaoComentario ou o CommentContainer. Esta expressão está sendo chamada no JSX na linha 104
    const caixaDeComentario = comentando ? (
      // Componente com o input e botão de enviar novo comentario. Import dele na linha 5.
      <SecaoComentario enviarComentario={enviarComentario}/>
    ) : (
      // Funcao map sendo feita na propriedade comentarios do estado. Ou seja, está sendo pego todos os
      // comentários do estado para serem renderizados na tela, dentro do componente CommentContainer 
      comentarios.map(comentario => {

        return (
          <CommentContainer>
            <p>{comentario}</p>
          </CommentContainer>
        );
      })

    );

    // ----------------------------------------------------------------

    return (
    
    <PostContainer>

          <PostHeader>
            <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
            <p>{props.nomeUsuario}</p>
          </PostHeader>

          <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

          <PostFooter>

            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={onClickCurtida}
              valorContador={numeroCurtidas}
            />

            <IconeComContador
              icone={iconeComentario}
              onClickIcone={onClickComentario}
              valorContador={numeroComentarios}
            />

          </PostFooter>

          {caixaDeComentario}

    </PostContainer>

    );
};

export default Post;