import React from 'react'
import { Card, Grid, Row, Text } from "@nextui-org/react";

const HelpModule = () => {
        const list = [
            {
            img: "https://images.vexels.com/media/users/3/224252/isolated/preview/e93bef14a4978942b186a8cfa493c5ed-logotipo-de-la-caja-de-envio.png",
            text: "Podrás hacer un seguimiento de tus paquetes",
            },
        ];
        return (
            <Grid.Container gap={2} justify="flex-start">
            {list.map((item, index) => (
                <Grid xs={6} sm={3} key={index}>
                <Card hoverable clickable>
                    <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        objectFit="cover"
                        src={item.img}
                        width="100%"
                        height={140}
                        alt={item.title}
                    />
                    </Card.Body>
                    <Card.Footer justify="flex-start">
                    <Row wrap="wrap" justify="space-between">
                        <Text b>{item.title}</Text>
                        <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>
                        {item.text}
                        </Text>
                    </Row>
                    </Card.Footer>
                </Card>
                </Grid>
            ))}
            </Grid.Container>
        );
        }

export default HelpModule