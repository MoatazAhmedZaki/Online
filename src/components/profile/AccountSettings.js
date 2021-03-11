import React, { Component } from 'react'
 import {InputGroup, FormControl ,Button} from "react-bootstrap"
export default class AccountSettings extends Component {
  constructor(props) {
    super(props);
    this.state = { showPassword: false, submit: true };
  }

  handleShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    return (
      <div>

      <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          <i class="fas fa-user"></i>
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        size="lg"
                        placeholder="الاسم"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
      
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          <i class="fas fa-envelope "></i>{" "}
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        size="lg"
                        placeholder="البريد الالكترونى"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
      
      
                    <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <i class="fas fa-lock"></i>
                  </InputGroup.Text>
                </InputGroup.Prepend>
      
                {this.state.showPassword ? (
                  <FormControl size="lg" type="text" placeholder=" كلمة المرور" />
                ) : (
                  <FormControl size="lg" type="password" placeholder=" كلمة المرور" />
                )}
      
                <InputGroup.Append>
                  <InputGroup.Text
                    onClick={this.handleShowPassword}
                    className="pass-btn"
                  >
                    <i class="far fa-eye px-2"></i>
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
      
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          <i class="fas fa-phone  "></i>{" "}
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        size="lg"
                        placeholder="رقم الهاتف"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
      
               
                    <Button className="w-100 send-btn my-4 py-2">حفظ</Button>
                  
              </div>
    )
  }
}
