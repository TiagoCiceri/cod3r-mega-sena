import React, { Component } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
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
            <Text style={StyleDefault.fontMedium}>
                Gerador de números aleatórios
            </Text>
            <Text style={StyleDefault.fontLarg}>
                 MEGA-SENA
            </Text>

            <TextInput 
                style={style.CaixaTexto}
                keyboardType={'numeric'}                                
                placeholder="Quantidade de números"
                value={`${this.state.qtdeNumeros}`}
                onChangeText={this.alterarQdteNumero}
                
            />            

            <Button
                style={style.Botao}
                title='Gerar'
                onPress={this.gerarNumeros}
            />
            <View style={style.NumberBol}>                
                {this.exibirNumeros()}
            </View>
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
    },
    CaixaTexto:{        
        borderBottomWidth:3,         
        fontSize:28,
        justifyContent: 'center',
        alignItems: 'center',
    }
})