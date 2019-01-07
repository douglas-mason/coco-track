import * as React from 'react';
import { Form, Input, Row, Col, Button } from 'antd';
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
        description: values['description'],
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
              <Col>
                <FormItem label="Description">
                  {getFieldDecorator('description', {
                    rules: [
                      {
                        required: true,
                        message: 'Please enter a description',
                      },
                    ],
                  })(<Input />)}
                </FormItem>
              </Col>
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
