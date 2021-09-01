export default function share(social, text, url, image) {
  if (social !== "fb" && social !== "twitter" && social !== "pinterest") {
    console.log("Share not found");
    return false;
  }

  var   share_url    = url || window.location.href;
  var   sharer       = ''
  const windowWidth  = 626;
  const windowHeight = 436;

  text      = text || document.querySelector('meta[name="description"]').getAttribute('content');
  text      = encodeURIComponent(text)
  image     = encodeURIComponent(image);
  share_url = encodeURIComponent(share_url);
  if(social === 'fb') {
    sharer = `https://www.facebook.com/sharer/sharer.php?u=${share_url}`;
  } else if(social === 'twitter') {
    sharer = `http://twitter.com/share?text=${text}&url=${share_url}`
  } else if(social === 'pinterest') {
    (function (d) {
      if(!d.getElementById('pinterest-script')) {
        var f = d.getElementsByTagName('SCRIPT')[0],
          p = d.createElement('SCRIPT');
        p.type = 'text/javascript';
        p.async = true;
        p.src = '//assets.pinterest.com/js/pinit.js';
        p.id = 'pinterest-script'
        f.parentNode.insertBefore(p, f);
      }
    }(document));
    sharer = `http://pinterest.com/pin/create/button/?url=${share_url}&media=${image}&description=${text}`;
  }

  window.open(sharer, 'sharer', `width=${windowWidth},height=${windowHeight}`);
};