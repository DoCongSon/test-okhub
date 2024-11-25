import SuMenh1 from '../assets/images/su-menh-1.svg'
import SuMenh2 from '../assets/images/su-menh-2.svg'
import SuMenh3 from '../assets/images/su-menh-3.svg'
import SuMenh4 from '../assets/images/su-menh-4.svg'
import DauAn1 from '../assets/images/dau-an-1.svg'
import DauAn2 from '../assets/images/dau-an-2.svg'
import DauAn3 from '../assets/images/dau-an-3.svg'
import DauAn4 from '../assets/images/dau-an-4.svg'
import DauAn5 from '../assets/images/dau-an-5.svg'
import Brand1 from '../assets/images/logo-brand-1.png'
import Brand2 from '../assets/images/logo-brand-2.png'
import Brand3 from '../assets/images/logo-brand-3.png'
import Brand4 from '../assets/images/logo-brand-4.png'
import Person from '../assets/images/person.png'
import Avatar from '../assets/images/avatar.png'

type SuMenhType = {
  icon: string
  name: string
  description: string
}

type DauAnType = SuMenhType & {
  unit?: string
}

type DoiTac = {
  name: string
  image: string
  avatar: string
  position: string
  comment: string
}

const suMenh: SuMenhType[] = [
  {
    icon: SuMenh1,
    name: 'VỚI CÁN BỘ NHÂN VIÊN',
    description:
      'Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá, phát triển, khẳng định giá trị bản thân',
  },
  {
    icon: SuMenh2,
    name: 'VỚI KHÁCH HÀNG',
    description:
      'Cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang đến cho khách hàng những trải nghiệm tốt nhất',
  },
  {
    icon: SuMenh3,
    name: 'VỚI ĐỐI TÁC',
    description:
      'Tin tưởng và muốn hợp tác dài lâu trên nền tảng của sự phát triển bền vững và hướng tới những giá trị tốt đẹp',
  },
  {
    icon: SuMenh4,
    name: 'VỚI CỘNG ĐỒNG',
    description:
      'Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, đóng góp tích cực cho các hoạt động hướng về cộng đồng',
  },
]

const dauAn: DauAnType[] = [
  {
    name: '686',
    unit: 'tỷ',
    description: 'Tổng tài sản và Vốn chủ sở hữu',
    icon: DauAn1,
  },
  {
    name: '93,9',
    unit: 'tỷ',
    description: 'Doanh thu thuần',
    icon: DauAn2,
  },
  {
    name: '24,6',
    unit: 'tỷ',
    description: 'Loi nhuận gộp',
    icon: DauAn3,
  },
  {
    name: '20+',
    description: 'Dự án trọng điểm',
    icon: DauAn4,
  },
  {
    name: '03',
    unit: 'văn phòng',
    description: 'Trên các tỉnh thành',
    icon: DauAn5,
  },
]

const brands = [
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand1,
  Brand2,
  Brand3,
  Brand4,
]

const doiTac: DoiTac[] = [
  {
    name: 'TS. Đinh Thanh Vân',
    image: Person,
    avatar: Avatar,
    position: 'Phó trưởng Khoa Ngân hàng - Tài chính, ĐH Kinh tế, GHQG Hà Nội',
    comment:
      'Chúng tôi thực sự hứng khởi khi đồng hành cùng Ami&M bởi ở đây có một đội ngũ nhân sự không chỉ giàu kinh nghiệm Strong lĩnh vực ngân hàng - tài chính mà quan trọng hơn đầy nhiệt tâm với mong muốn đóng góp vào sự phát triển chung của quá trình giáo dục định hướng thế hệ trẻ.',
  },
  {
    name: 'TS. Đinh Thiên Hương',
    image: Person,
    avatar: Avatar,
    position: 'Chuyên gia tư vấn tài chính, Ngân hàng Thế giới',
    comment:
      'Tôi rất ấn tượng với sự chuyên nghiệp, tận tâm của đội ngũ tư vấn tài chính tại Ami&M. Họ không chỉ giúp tôi tìm ra giải pháp tài chính phù hợp với nhu cầu mà còn giúp tôi hiểu rõ hơn về cách quản lý tài chính cá nhân.',
  },
  {
    name: 'Ông Nguyễn Văn A',
    image: Person,
    avatar: Avatar,
    position: 'Giám đốc Công ty TNHH ABC',
    comment:
      'Các chuyên gia tư vấn tài chính tại Ami&M đã giúp tôi tìm ra giải pháp tài chính phù hợp với nhu cầu cũng như mục tiêu tài chính của doanh nghiệp. Tôi rất hài lòng với dịch vụ của Ami&M.',
  },
]
export { suMenh, dauAn, brands, doiTac }
