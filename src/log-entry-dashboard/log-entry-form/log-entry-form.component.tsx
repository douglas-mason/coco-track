import * as React from 'react';
import {
  Form,
  Input,
  InputNumber,
  Select,
  DatePicker,
  Row,
  Radio,
  Col,
  Button,
} from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { Categories } from '../../_shared/contants/categories.enum';
import { SubCategories } from '../../_shared/contants/sub-categories.enum';
import {
  AuthenticationContext,
  IAuthenticationContext,
} from '../../_shared/contexts/authentication/authentication.context';
import { withAuthenticationContext } from '../../_shared/contexts/authentication/with-authentication-context.component';
import { LogEntry } from '../../_shared/interfaces/log-entry.interface';
import { createLogEntry } from '../../_shared/services/log-entry.service';
import {
  timeFormClass,
  buttonContainerClass,
  pointsButtonContainerClass,
} from './log-entry-form.styles';
import { getStringValuesFromEnum } from '../../_shared/services/enum-utils.service';

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { TextArea } = Input;
const SelectOption = Select.Option;

interface LogEntryFormProps extends FormComponentProps {
  authContext: IAuthenticationContext;
}

class LogEntryFormComponent extends React.Component<LogEntryFormProps> {
  // tslint:disable-next-line
  hasErrors = (fieldsError: any) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };

  handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const {
      authContext: { currentUser },
      form,
    } = this.props;

    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      createLogEntry({
        title: values['title'],
        arePointsCompleted: values['completedPoints'] || null,
        notes: values['notes'],
        date: values['logDate'],
        value: values['logValue'],
        categoryId: values['category'], //Categories.BillableTime,
        subCategoryId: values['subcategory'] || null, //SubCategories.Admin,
        updatedBy: currentUser ? currentUser.id : '',
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      this.handleClearForm();
    });
  };

  handleClearForm = () => {
    const { form } = this.props;
    form.resetFields();
  };

  renderCategoriesSelectOptions = () => {
    let keys = getStringValuesFromEnum(Categories);

    // tslint:disable-next-line
    return keys.map((category: any) => {
      return (
        <SelectOption key={category} value={Categories[category]}>
          {category}
        </SelectOption>
      );
    });
  };

  renderSubCategoriesSelectOptions = () => {
    let keys = getStringValuesFromEnum(SubCategories);

    // tslint:disable-next-line
    return keys.map((subCategory: any) => {
      return (
        <SelectOption key={subCategory} value={SubCategories[subCategory]}>
          {subCategory}
        </SelectOption>
      );
    });
  };

  renderPointsInput = () => {
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;

    if (getFieldValue('completedPoints') === true) {
      return (
        <Col span={8}>
          <FormItem>
            {getFieldDecorator('points', {
              rules: [
                {
                  required: true,
                  message: 'Please enter points value',
                },
              ],
            })(<InputNumber placeholder="points" />)}
          </FormItem>
        </Col>
      );
    } else {
      return <Col span={8} />;
    }
  };

  renderSecondaryOptions = () => {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    if (getFieldValue('category') === Categories.UnbillableTime) {
      return (
        <Row>
          <Col span={24}>
            <FormItem>
              {getFieldDecorator('subcategory', {
                rules: [
                  {
                    required: true,
                    message: 'Please enter a Unbillable category',
                  },
                ],
              })(
                <Select placeholder="unbillable subcategory">
                  {this.renderSubCategoriesSelectOptions()}
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
      );
    } else if (
      getFieldValue('category') === Categories.TimeOnPoints ||
      getFieldValue('category') === Categories.BillableTime ||
      getFieldValue('category') === Categories.Points
    ) {
      return (
        <Row>
          <Col span={16} className={pointsButtonContainerClass}>
            <FormItem>
              {getFieldDecorator('completedPoints', {
                initialValue: '0',
                rules: [
                  {
                    required: false,
                    message: 'Was the task complete',
                  },
                ],
              })(
                <RadioGroup>
                  <RadioButton value={true} name="complete">
                    complete
                  </RadioButton>
                  <RadioButton value={false} name="notComplete">
                    not complete
                  </RadioButton>
                </RadioGroup>
              )}
            </FormItem>
          </Col>
          {this.renderPointsInput()}
        </Row>
      );
    }
  };

  render() {
    const {
      form: { getFieldDecorator, getFieldsError, setFieldsValue },
    } = this.props;

    return (
      <AuthenticationContext.Consumer>
        {() => (
          <section className={timeFormClass}>
            <Form onSubmit={this.handleOnSubmit}>
              <Row gutter={8}>
                <Col span={24}>
                  <FormItem>
                    {getFieldDecorator('title', {
                      rules: [
                        {
                          required: true,
                          message: 'Please enter a project title',
                        },
                      ],
                    })(<Input placeholder="project title" name="title" />)}
                  </FormItem>
                </Col>
              </Row>
              <Row gutter={8}>
                <Col span={12}>
                  <FormItem>
                    {getFieldDecorator('logValue', {
                      initialValue: 0,
                      rules: [
                        {
                          required: true,
                          message: 'Please enter a hours worked',
                        },
                      ],
                    })(<InputNumber placeholder="hours worked" />)}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem>
                    {getFieldDecorator('category', {
                      rules: [
                        {
                          required: true,
                          message: 'Please enter a category',
                        },
                      ],
                    })(
                      <Select
                        // onChange={this.handleCategoryChange}
                        placeholder="time category"
                      >
                        {this.renderCategoriesSelectOptions()}
                      </Select>
                    )}
                  </FormItem>
                </Col>
              </Row>

              {this.renderSecondaryOptions()}

              <Row gutter={8}>
                <Col span={24}>
                  <FormItem>
                    {getFieldDecorator('logDate', {
                      rules: [
                        {
                          required: true,
                          message: 'Please enter date of project',
                        },
                      ],
                    })(<DatePicker placeholder="select a date" />)}
                  </FormItem>
                </Col>
              </Row>
              <Row gutter={8}>
                <Col span={24}>
                  <FormItem>
                    {getFieldDecorator('notes', {
                      rules: [
                        {
                          required: true,
                          message: 'Please enter project notes',
                        },
                      ],
                    })(<TextArea placeholder="project notes" autosize />)}
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <div className={buttonContainerClass}>
                  <Col sm={12} md={16} lg={18}>
                    <Button type="ghost" onClick={this.handleClearForm}>
                      clear
                    </Button>
                  </Col>
                  <Col sm={12} md={8} lg={6}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      disabled={this.hasErrors(getFieldsError())}
                    >
                      submit
                    </Button>
                  </Col>
                </div>
              </Row>
            </Form>
          </section>
        )}
      </AuthenticationContext.Consumer>
    );
  }
}

export const LogEntryForm = withAuthenticationContext(
  Form.create()(LogEntryFormComponent)
);
