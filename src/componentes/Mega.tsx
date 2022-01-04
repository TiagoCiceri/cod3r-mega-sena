import React, { Component } from 'react'
import { Button, StyleSheet, Text, TextInput } from 'react-native'
import StyleDefault from '../componentes/StyleDefault'
import MostraNumeroMega from './MostraNumeroMega'

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    alterarQdteNumero = (qtde) => {        
        this.setState({ qtdeNumeros: +qtde})
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n =>[...n, this.gerarNumerosNaoContidos(n)], []) 
            .sort((a, b) => a - b)

        this.setState({ numeros })
    }

    gerarNumerosNaoContidos = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumerosNaoContidos(nums) : novo
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MostraNumeroMega key={num} num={num} />
        })
    }

    render() {
        return(
            <>
            <Text style={StyleDefault.fontLarg}>
                Gerar números da MEGA-SENA
            </Text>

            <TextInput 
                keyboardType={'numeric'}
                style={{borderBottomWidth:1}}
                placeholder="Quantidade de números"
                value={`${this.state.qtdeNumeros}`}
                onChangeText={this.alterarQdteNumero}
            />
            <Button
                style={style.Botao}
                title='Gerar'
                onPress={this.gerarNumeros}
            />
            <Text style={style.NumberBol}>                
                {this.exibirNumeros()}
            </Text>
            </>
        )
    }

}

const style = StyleSheet.create({
    NumberBol:{
        marginTop: 40,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',       

    },
    Botao:{
        padding: 20,
    }
})