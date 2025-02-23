import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class Privacy extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <h4 className="section-title-login">Chính sách bảo mật </h4>
              <p>
                Bảo vệ thông tin cá nhân của bạn là ưu tiên hàng đầu của chúng
                tôi tại [Tên Công Ty]. Chính sách Bảo mật này mô tả cách chúng
                tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn khi
                bạn sử dụng trang web của chúng tôi.
              </p>

              <h2>1. Thông tin chúng tôi thu thập</h2>
              <p>Chúng tôi có thể thu thập các loại thông tin sau:</p>
              <ul>
                <li>
                  <strong>Thông tin cá nhân:</strong> Bao gồm tên, địa chỉ
                  email, số điện thoại và địa chỉ.
                </li>
                <li>
                  <strong>Thông tin giao dịch:</strong> Các chi tiết về giao
                  dịch mà bạn thực hiện trên trang web của chúng tôi.
                </li>
                <li>
                  <strong>Thông tin sử dụng:</strong> Thông tin về cách bạn sử
                  dụng trang web, bao gồm các trang bạn truy cập, thời gian bạn
                  dành trên mỗi trang, và các hoạt động khác.
                </li>
              </ul>

              <h2>2. Sử dụng thông tin</h2>
              <p>Chúng tôi sử dụng thông tin của bạn để:</p>
              <ul>
                <li>Cung cấp và duy trì các dịch vụ bạn yêu cầu.</li>
                <li>
                  Hiểu và đáp ứng nhanh chóng vào nhu cầu và yêu cầu của bạn.
                </li>
                <li>
                  Cải thiện trang web của chúng tôi và trải nghiệm của người
                  dùng.
                </li>
                <li>
                  Gửi thông tin quảng cáo và tiếp thị, nếu bạn đồng ý nhận.
                </li>
              </ul>

              <h2>3. Bảo mật thông tin</h2>
              <p>
                Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn và áp dụng
                các biện pháp bảo mật để đảm bảo an toàn. Chúng tôi không bao
                giờ chia sẻ thông tin cá nhân của bạn với bên thứ ba mà không có
                sự đồng ý của bạn.
              </p>

              <h2>4. Quyền lợi và lựa chọn của bạn</h2>
              <p>
                Bạn có quyền truy cập, sửa đổi hoặc xóa thông tin cá nhân của
                mình bất cứ lúc nào. Bạn cũng có quyền từ chối nhận thông tin
                tiếp thị từ chúng tôi. Để thực hiện các quyền lợi này, vui lòng
                liên hệ với chúng tôi qua địa chỉ email [địa chỉ email liên hệ].
              </p>

              <h2>5. Thay đổi Chính sách Bảo mật</h2>
              <p>
                Chúng tôi có thể cập nhật Chính sách Bảo mật này vào bất kỳ lúc
                nào và bản cập nhật sẽ có hiệu lực ngay lập tức sau khi chúng
                được đăng lên trang web.
              </p>

              <h2>6. Liên hệ chúng tôi</h2>
              <p>
                Nếu bạn có bất kỳ câu hỏi hoặc đề xuất nào về Chính sách Bảo mật
                của chúng tôi, vui lòng liên hệ chúng tôi qua địa chỉ email [địa
                chỉ email liên hệ] hoặc số điện thoại [số điện thoại liên hệ].
              </p>

              <p>
                Cảm ơn bạn đã tin tưởng và sử dụng dịch vụ của [Tên Công Ty].
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Privacy;
