import React, { useState } from 'react';
import { 
  Layout, 
  Menu, 
  Typography, 
  Card, 
  Row, 
  Col, 
  Statistic,
  Table,
  Button,
  Space,
  Input,
  Select
} from 'antd';
import {
  ShoppingOutlined,
  AppstoreOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const { Option } = Select;

const Admin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('dashboard');

  const menuItems = [
    {
      key: 'dashboard',
      icon: <BarChartOutlined />,
      label: 'Дашборд',
    },
    {
      key: 'products',
      icon: <ShoppingOutlined />,
      label: 'Товары',
    },
    {
      key: 'categories',
      icon: <AppstoreOutlined />,
      label: 'Категории',
    },
    {
      key: 'users',
      icon: <UserOutlined />,
      label: 'Пользователи',
    },
    {
      key: 'orders',
      icon: <ShoppingCartOutlined />,
      label: 'Заказы',
    },
  ];

  const renderContent = () => {
    switch (selectedMenu) {
      case 'dashboard':
        return (
          <>
            <Row gutter={16}>
              <Col span={6}>
                <Card>
                  <Statistic
                    title="Всего товаров"
                    value={1128}
                    prefix={<ShoppingOutlined />}
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <Statistic
                    title="Активные заказы"
                    value={93}
                    prefix={<ShoppingCartOutlined />}
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <Statistic
                    title="Пользователей"
                    value={2567}
                    prefix={<UserOutlined />}
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <Statistic
                    title="Категорий"
                    value={24}
                    prefix={<AppstoreOutlined />}
                  />
                </Card>
              </Col>
            </Row>
          </>
        );
      case 'products':
        return (
          <Card>
            <Space style={{ marginBottom: 16 }}>
              <Input
                placeholder="Поиск товаров"
                prefix={<SearchOutlined />}
                style={{ width: 200 }}
              />
              <Select defaultValue="all" style={{ width: 120 }}>
                <Option value="all">Все категории</Option>
                <Option value="active">Активные</Option>
                <Option value="inactive">Неактивные</Option>
              </Select>
              <Button type="primary" icon={<PlusOutlined />}>
                Добавить товар
              </Button>
            </Space>
            <Table
              columns={[
                {
                  title: 'ID',
                  dataIndex: 'id',
                  key: 'id',
                },
                {
                  title: 'Название',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: 'Категория',
                  dataIndex: 'category',
                  key: 'category',
                },
                {
                  title: 'Цена',
                  dataIndex: 'price',
                  key: 'price',
                },
                {
                  title: 'Статус',
                  dataIndex: 'status',
                  key: 'status',
                },
                {
                  title: 'Действия',
                  key: 'actions',
                  render: () => (
                    <Space>
                      <Button icon={<EditOutlined />} />
                      <Button danger icon={<DeleteOutlined />} />
                    </Space>
                  ),
                },
              ]}
              dataSource={[]}
            />
          </Card>
        );
      default:
        return <div>Выберите раздел в меню</div>;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={setCollapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div style={{ 
          height: '32px', 
          margin: '16px', 
          background: 'rgba(255, 255, 255, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff'
        }}>
          {!collapsed && 'Админ-панель'}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedMenu]}
          items={menuItems}
          onClick={({ key }: { key: string }) => setSelectedMenu(key)}
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
        <Header style={{ 
          background: '#fff', 
          padding: '0 24px',
          boxShadow: '0 1px 4px rgba(0,21,41,.08)'
        }}>
          <Title level={4} style={{ margin: '16px 0' }}>
            {menuItems.find(item => item.key === selectedMenu)?.label}
          </Title>
        </Header>
        <Content style={{ 
          margin: '24px 16px', 
          padding: 24, 
          background: '#fff',
          minHeight: 280,
          borderRadius: '4px'
        }}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin; 