import * as React from 'react';
import {
  Form,
  Input,
  InputNumber,
  Menu,
  Select,
  DatePicker,
  Row,
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
import { inputClass } from './log-entry-form.styles';
import { panelClass } from '../log-entry-dashboard.styles';

const FormItem = Form.Item;

interface LogEntryFormProps extends FormComponentProps {
  authContext: IAuthenticationContext;
}

class LogEntryFormComponent extends React.Component<LogEntryFormProps> {
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
        title: values['description'],
        arePointsCompleted: values['completedPoints'],
        notes: values['notes'],
        date: values['logDate'],
        value: values['logValue'],
        categoryId: values['category'], //Categories.BillableTime,
        subCategoryId: values['subcategory'], //SubCategories.Admin,
        updatedBy: currentUser ? currentUser.id : '',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <AuthenticationContext.Consumer>
        {() => (
          <Form hideRequiredMark layout="inline" onSubmit={this.handleOnSubmit}>
            <Row>
              <Col span={24} className={panelClass}>
                <FormItem className={inputClass}>
                  {getFieldDecorator('projectTitle', {
                    rules: [
                      {
                        required: true,
                        message: 'Please enter a description',
                      },
                    ],
                  })(
                    <Input placeholder="project title" className={inputClass} />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <FormItem className={panelClass}>
                {getFieldDecorator('hoursRecorded', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter a date',
                    },
                  ],
                })(<InputNumber placeholder="hours" />)}
              </FormItem>
              <FormItem className={panelClass}>
                {getFieldDecorator('hoursRecorded', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter a date',
                    },
                  ],
                })(
                  <Select defaultValue="Zhejiang">
                    <Select.Option value="Zhejiang">Zhejiang</Select.Option>
                    <Select.Option value="Jiangsu">Jiangsu</Select.Option>
                  </Select>
                )}
              </FormItem>
            </Row>
            <Row>
              <FormItem className={panelClass}>
                {getFieldDecorator('datePicker', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter a date',
                    },
                  ],
                })(<DatePicker placeholder="select date" />)}
              </FormItem>
            </Row>
            <Row>
              <FormItem className={panelClass}>
                {getFieldDecorator('projectDescription', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter a date',
                    },
                  ],
                })(<Input placeholder="project description" />)}
              </FormItem>
            </Row>
            <Row>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Row>
          </Form>
        )}
      </AuthenticationContext.Consumer>
    );
  }
}

export const LogEntryForm = withAuthenticationContext(
  Form.create()(LogEntryFormComponent)
);
