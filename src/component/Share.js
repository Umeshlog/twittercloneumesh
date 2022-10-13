import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  LinkedinIcon,
  PinterestIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
function Share() {
  return (
    <>
      <div className="shar">
        <span  className="share">
          <TwitterShareButton url="Twiter.com">
            <TwitterIcon size={32} />
          </TwitterShareButton>
        </span>
        <span  className="share">
          <FacebookShareButton url="Facebook.com">
            <FacebookIcon size={32} />
          </FacebookShareButton>
        </span>
        <span  className="share">
          <EmailShareButton url="Email.com">
            <EmailIcon size={32} />
          </EmailShareButton>
        </span>
        <span  className="share">
          <InstapaperShareButton url="Instagram.com">
            <InstapaperIcon size={32} />
          </InstapaperShareButton>
        </span>
        <span  className="share">
          <LinkedinShareButton url="Linkedin.com">
            <LinkedinIcon size={32} />
          </LinkedinShareButton>
        </span>
        <span  className="share">
          <PinterestShareButton url="Pinterest.com">
            <PinterestIcon size={32} />
          </PinterestShareButton>
        </span>
        <span  className="share">
          <TelegramShareButton url="Telegram.com">
            <TelegramIcon size={32} />
          </TelegramShareButton>
        </span>
        <span  className="share">
          <WhatsappShareButton url="Whatsapp.com">
            <WhatsappIcon size={32} />
          </WhatsappShareButton>
        </span>
      </div>
    </>
  );
}

export default Share;
