import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';
import {PLANET_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = 'krystal出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: 'Krystal GITEE',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: 'B站主页',
          href: 'https://space.bilibili.com/216627262?spm_id_from=333.1007.0.0',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined/> Krystal GitHub</>,
          href: 'https://github.com/Krystal0908',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
