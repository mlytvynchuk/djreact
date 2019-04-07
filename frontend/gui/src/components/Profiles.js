import React from 'react';
import ProfileForm from '../components/ProfileForm'
import OurModal from '../containers/Modal'
import { Table, Divider, Tag, Button } from 'antd';
const { Column, ColumnGroup } = Table;



const Profiles = ({profiles,changeProfile, deleteProfile}) => {
        return(
            <div className="Profiles">
                <div><h1>Profiles</h1>
                    <OurModal title="Add User" textButton="Add User">
                        <ProfileForm requestType='post' profileID={null} changeProfile={changeProfile} />
                    </OurModal>

                </div>
                <Table dataSource={profiles}>
                  <Column
                    title="ID"
                    dataIndex="id"
                    key={(text, record) => (
                        `${record.id}`
                        )}
                    />

                  <Column
                    title="Username"
                    dataIndex="username"
                    key="username"
                  />
                  <Column
                    title="Email"
                    dataIndex="email"
                    key="email"
                  />

                <Column
                  title="Group"
                  dataIndex="group"
                  key="group"
                />
                <Column
                  title="Action"
                  key="action"
                  render={(text, record) => (
                    <span>
                        <OurModal title="Edit user" textButton="Edit">
                            <ProfileForm requestType='put' profileID={record.id} changeProfile={changeProfile} />
                        </OurModal>
                      <form >
                      {/*<Divider type="vertical" />*/}
                          <br/>
                      <Button type="primary" onClick={() => deleteProfile(record.id)}>Delete</Button>
                      </form>
                    </span>
                  )}
                />
              </Table>
            </div>
        );
};
export default Profiles;