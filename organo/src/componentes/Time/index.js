import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props)=>{
    const css = {backgroundColor: props.corSecundaria}
return(
    props.colaboradores.length > 0 &&
    <section className='time' style={css}>
        <h3 style={{borderColor: props.corPrimaria}}>
            {props.nome}</h3>
            {props.colaboradores.map(colaborador =><Colaborador nome={Colaborador.nome} cargo={Colaborador.cargo} imagem={Colaborador.imagem}/>)}
    </section>
)
}
export default Time