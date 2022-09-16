import { Row, Col, Card } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import "../style/style.css";
import { PieChart, Pie, Cell } from "recharts";
import LayoutDashboard from "../layout/layout";


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
}: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const Manreport = () => {
    const data = [
        { name: 'Geeksforgeeks', students: 200 },
        { name: 'Technical scripter', students: 300 },
        { name: 'Geek-i-knack', students: 200 },
        { name: 'Geek-o-mania', students: 100 },
        { name: 'Geek-mania', students: 100 }
    ];

    return (
        <>
        <LayoutDashboard>
            <Row>
                <Col>
                    <Card>
                        <PieChart width={500} height={500}>
                            <Pie data={data} dataKey="students" cx={200}
                                cy={200}
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8" >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        2
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        3
                    </Card>
                </Col>
                <Col>
                    <Card>
                        4
                    </Card>
                </Col>
            </Row>
            </LayoutDashboard>
        </>
    )
}
export default Manreport;