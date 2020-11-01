import React,{Component} from 'react';
import {Card} from 'react-bootstrap'
import '../App.css'
import * as wjInput from '@grapecity/wijmo.react.input';
import '@grapecity/wijmo.styles/wijmo.css';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons'
import { getData1, getData2, getData3  } from './value';

class SelectedValue extends React.Component{

  constructor(props){
    super(props);
    this.state={
      checkedItemFirst: [],
      checkedItemSecond:[],
      checkedItemThird:[],
      even:[],
      dataFirst:getData1(),
      dataSecond:getData2(),
      dataThird:getData3()
    }
  }

  onCheckedItemFirst = (valueFirst) =>{ 
debugger;
this.setState({ checkedItemFirst: valueFirst.checkedItems });
  }

  onCheckedItemSecond = (valueSecond) =>{
    debugger;
    this.setState({ checkedItemSecond: valueSecond.checkedItems });
      }

      onCheckedItemThird = (valueThird) =>{
        debugger;
        this.setState({ checkedItemThird: valueThird.checkedItems });
          }

          deleteData(item){
            const data = this.state.checkedItemFirst.filter(i => i.id !== item.id)
    this.setState({checkedItemFirst: data})
        }
        deleteDataS(item){
          debugger;
          const data = this.state.checkedItemSecond.filter(i => i.id !== item.id)
          this.setState({checkedItemSecond: data})
        }

        deleteDataT(item){
          debugger;
          const data = this.state.checkedItemThird.filter(i => i.id !== item.id)
          this.setState({checkedItemThird: data})
        }

        

    render(){
        return(
            <div className="container selectContent">
            <div className="row">
                <div className="col-lg-6">
                <Card>
  <Card.Body>
  <form>

  
  <div className="form-check checkbosalign">
      <h4 className="checkboxHeading">Portugal</h4>
      <wjInput.ListBox displayMemberPath="name" checkedMemberPath="selected" checkedItemsChanged={this.onCheckedItemFirst} itemsSource={this.state.dataFirst}>
                    </wjInput.ListBox>
  </div>

  <div className="form-check checkbosalign">
      <h4 className="checkboxHeading">Nicaragua</h4>
      <wjInput.ListBox displayMemberPath="name" checkedMemberPath="selected" checkedItemsChanged={this.onCheckedItemSecond} itemsSource={this.state.dataSecond}>
                    </wjInput.ListBox>
  </div>

  <div className="form-check checkbosalign">
      <h4 className="checkboxHeading">Marshall Islands</h4>
      <wjInput.ListBox displayMemberPath="name" checkedMemberPath="selected" checkedItemsChanged={this.onCheckedItemThird} itemsSource={this.state.dataThird}>
                    </wjInput.ListBox>
  </div>
  
</form>
  </Card.Body>
</Card>
                </div>

                <div className="col-lg-6">
                <Card className="cardHeight">
  <Card.Body>
    {
      this.state.checkedItemFirst.length == 0 && this.state.checkedItemSecond.length == 0 && this.state.checkedItemThird.length == 0 ? <div>
      <h4 className="noselected">No Value Selected</h4>
      </div>: null
    }
      

      <div>
      <form>
  <div className="form-check checkbosalign">
    
{

}


<Table striped bordered hover size="sm">
  
                                {
                                    this.state.checkedItemFirst.map((item, i) =>
                                        <tbody>
                                            <tr>

                                                <td key={item.id}>{item.name}</td>
                                                <td className="times"><span className="dlt" onClick={()=>this.deleteData(item)}><FontAwesomeIcon icon={faTimes}/></span>
                                                </td>
                                                
                                            </tr>

                                        </tbody>
                                    )
                                }
                            </Table>









    







<Table striped bordered hover size="sm">
                                {
                                    this.state.checkedItemSecond.map((itemS, i) =>
                                        <tbody>
                                            <tr>

                                                <td key={itemS.id}>{itemS.name}</td>
                                                <td className="times"><span className="dlt" onClick={()=>this.deleteDataS(itemS)}><FontAwesomeIcon icon={faTimes}/></span>
                                                </td>
                                                
                                            </tr>

                                        </tbody>
                                    )
                                }
                            </Table>



<Table striped bordered hover size="sm">
                                {
                                    this.state.checkedItemThird.map((itemT, i) =>
                                        <tbody>
                                            <tr>

                                                <td key={itemT.id}>{itemT.name}</td>
                                                <td className="times"><span className="dlt" onClick={()=>this.deleteDataT(itemT)}><FontAwesomeIcon icon={faTimes}/></span>
                                                </td>
                                                
                                            </tr>

                                        </tbody>
                                    )
                                }
                            </Table>




  


      </div>
      </form>
      </div>
      
      
      </Card.Body>
</Card>
                </div>
                </div>
                </div>
        )
    }
}

export default SelectedValue;