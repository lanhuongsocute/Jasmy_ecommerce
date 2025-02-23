import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readUserByToken } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Image, Spinner } from "react-bootstrap";
import defaultAvatar from "../../assets/images/default_avatar.png"; // Đường dẫn tới ảnh mặc định

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, userData } = useSelector((state) => state.user);

  useEffect(() => {
    // Kiểm tra nếu không có token, chuyển hướng về trang login
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      dispatch(readUserByToken());
    }
  }, [dispatch, navigate]);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Header className="text-center">
              <h3>Thông tin người dùng</h3>
            </Card.Header>
            {userData && (
              <Card.Body className="text-center">
                <Image
                  src={userData.user.avatar ? userData.user.avatar : defaultAvatar}
                  alt="Avatar"
                  roundedCircle // Để bo tròn ảnh đại diện
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
                <Card.Title className="mt-3">{userData.user.name}</Card.Title>
                <Card.Text>
                <strong>Role:</strong> {userData.user.role}
                </Card.Text>
                <Card.Text>
                  <strong>Email:</strong> {userData.user.email}
                </Card.Text>
              </Card.Body>
            )}
            {!userData && (
              <Card.Body className="text-center">
                <p>Loading...</p>
              </Card.Body>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
