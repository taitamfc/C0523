import React, { Component } from 'react';

class MayTinh extends Component {
    constructor( props ){
        super(props)
        this.state = {
            soA: 0,
            soB: 0,
            toanTu: '',
            ketQua: '',
        }

        this.setFormData = this.setFormData.bind(this)
    }

    xuLyCong = () => {
        let soA = parseInt( this.state.soA );
        let soB = parseInt( this.state.soB );
        let kq  = soA + soB;
        this.setState( { ketQua: kq  } )
    }
    xuLyTru = () => {
        alert('-')
    }
    xuLyNhan = () => {
        alert('x')
    }
    xuLyChia = () => {
        alert('/')
    }

    setSoA = (e) => {
        this.setState( { soA: e.target.value  } )
    }
    setSoB = (e) => {
        this.setState( { soB: e.target.value  } )
    }

    setFormData(e){
    // setFormData = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({ 
            [name]: value
        })

    }

    render() {
        return (
            <div>
                SoA: { this.state.soA } -
                SoB: { this.state.soB }
                <br/>
                {/* So thu nhat: <input type='number' onChange={this.setSoA} /> <br/>
                So thu hai: <input type='number' onChange={this.setSoB}/> <br/> */}
                So thu nhat: <input type='number' name='soA' onChange={this.setFormData} /> <br/>
                So thu hai: <input type='number' name='soB' onChange={this.setFormData}/> <br/>
                <button onClick={this.xuLyCong}> + </button>
                <button onClick={this.xuLyTru}> - </button>
                <button onClick={this.xuLyNhan}> x </button>
                <button onClick={this.xuLyChia}> / </button>
                <br/>
                Ket qua la: { this.state.ketQua }
            </div>
        );
    }
}

export default MayTinh;