import React from "react";
import { Card, Col, Row } from "antd";
const { Meta } = Card;

const TechCard = () => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card
            cover={
              <img
                alt="React"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
              />
            }
            style={{ height: 600 }}
            hoverable
            title="React"
            bordered={true}
          >
            <Meta title="React FAQ" description="All FAQs related to React" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ height: 600 }}
            title="Redux"
            bordered={true}
            cover={<img alt="Redux" src="https://redux.js.org/img/redux.svg" />}
          >
            <Meta title="Redux FAQ" description="All FAQs related to Redux" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TechCard;
