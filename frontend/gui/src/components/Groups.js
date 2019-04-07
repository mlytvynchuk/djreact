import React from 'react';
import OurModal from '../containers/Modal'
import { Table, Button, Checkbox } from 'antd';
import GroupForm from "./GroupForm";
const { Column } = Table;


const Groups = ({groups,changeGroup, deleteGroup}) => {
        return(
            <div className="groups">
                <div><h1>Groups</h1>
                    <OurModal title="Add Group
                    " textButton="Add Group">
                        <GroupForm requestType='post' groupID={null} changeGroup={changeGroup} />
                    </OurModal>

                </div>
                <Table dataSource={groups}>
                  <Column
                    title="ID"
                    dataIndex="id"
                    key={(text, record) => (
                        `${record.id}`
                        )}
                    />
                  <Column
                    title="Name"
                    dataIndex="name"
                    key="name"
                  />

                <Column
                  title="Video"
                  dataIndex="is_video"
                  key="is_video"
                  render={(text,record) => {
                      if (record.is_video === true) {
                          return (
                              <Checkbox defaultChecked={true} disabled />
                          )
                      }else{
                          return (
                              <Checkbox defaultChecked={false} disabled />
                          )
                      }
                  }}
                />
                <Column
                  title="Data Analytics"
                  dataIndex="is_data_analytics"
                  key="is_data_analytics"
                  render={(text,record) => {
                      if (record.is_data_analytics === true) {
                          return (
                              <Checkbox defaultChecked={true} disabled />
                          )
                      }else{
                          return (
                              <Checkbox defaultChecked={false} disabled />
                          )
                      }
                  }}
                />

                <Column
                  title="Voice Analytics"
                  dataIndex="is_voice_analytics"
                  key="is_voice_analytics"
                  render={(text,record) => {
                      if (record.is_voice_analytics === true) {
                          return (
                              <Checkbox defaultChecked={true} disabled />
                          )
                      }else{
                          return (
                              <Checkbox defaultChecked={false} disabled />
                          )
                      }
                  }}
                />
                <Column
                  title="Service Analytics"
                  dataIndex="is_services_analytics"
                  key="is_services_analytics"
                  render={(text,record) => {
                      if (record.is_services_analytics === true) {
                          return (
                              <Checkbox defaultChecked={true} disabled />
                          )
                      }else{
                          return (
                              <Checkbox defaultChecked={false} disabled />
                          )
                      }
                  }}
                />
                <Column
                  title="Action"
                  key="action"
                  render={(text, record) => (
                    <span>
                        <OurModal title="Edit Group" textButton="Edit">
                            <GroupForm requestType='put' groupID={record.id} changeGroup={changeGroup} />

                        </OurModal>
                      <form >
                      {/*<Divider type="vertical" />*/}
                          <br/>
                         <Button htmlType="submit" type="primary" onClick={() => deleteGroup(record.id)}>Delete</Button>
                      </form>
                    </span>
                  )}
                />
              </Table>
            </div>
        );
};
export default Groups;