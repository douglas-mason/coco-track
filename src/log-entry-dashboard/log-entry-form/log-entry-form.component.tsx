import * as React from 'react';
import { Form, Input, Row, Col, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { createLogEntry } from '../../_shared/services/log-entry.service';
import { Categories } from '../../_shared/contants/categories.enum';
import { SubCategories } from '../../_shared/contants/sub-categories.enum';
import { User } from '../../_shared/interfaces/user.interface';

const FormItem = Form.Item;

interface LogEntryFormProps extends FormComponentProps {
  currentUser: User;
}

class LogEntryForm extends React.Component<LogEntryFormProps> {
  handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { currentUser, form } = this.props;
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
        updatedBy: currentUser.id,
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
    );
  }
}

export const WrappedLogEntryForm = Form.create()(LogEntryForm);
