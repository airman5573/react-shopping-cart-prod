import S from "../../styled";

function LogoLink({ src, href, className = "logo-link" }) {
  return (
    <S.LogoLink href={href} className={className}>
      <img src={src} alt="" />
    </S.LogoLink>
  );
}

export default LogoLink;
