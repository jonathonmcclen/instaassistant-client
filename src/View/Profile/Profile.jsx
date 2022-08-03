import React from 'react';
import './scss/profile-styles.css';
import {
  Card,
  Grid,
  Text,
  Button,
  Row,
  Link as LinkNext,
} from '@nextui-org/react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <>
      <div className="profile-main">
        <Grid.Container gap={2}>
          <Grid sm={12} xl>
            <Card
              css={{
                mw: '330px',
                backdropFilter: 'saturate(200%) blur(8px)',
                background: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              <Card.Header>
                <Text b>Profile</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: '$10' }}>
                <LinkNext>jonathonsmcclendon@gmail.com</LinkNext>
                <LinkNext>ChangePassword</LinkNext>
                <Text>
                  Thank you for becoming a Marcus Bot user. make sure your
                  billing information is up to date or change your email/pass
                  word form this page.
                </Text>
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Row justify="flex-end">
                  <Link to="/billing">
                    <Button size="sm" light>
                      Billing Settings
                    </Button>
                  </Link>
                  <Button size="sm">Agree</Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
      </div>
    </>
  );
}

export default Profile;
