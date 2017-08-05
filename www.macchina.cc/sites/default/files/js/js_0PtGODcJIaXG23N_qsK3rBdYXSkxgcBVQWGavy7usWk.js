(function ($) {

  Drupal.behaviors.captcha = {
    attach: function (context) {

      // Turn off autocompletion for the CAPTCHA response field.
      // We do it here with Javascript (instead of directly in the markup)
      // because this autocomplete attribute is not standard and
      // it would break (X)HTML compliance.
      $("#edit-captcha-response").attr("autocomplete", "off");

    }
  };

  Drupal.behaviors.captchaAdmin = {
    attach: function (context) {
      // Add onclick handler to checkbox for adding a CAPTCHA description
      // so that the textfields for the CAPTCHA description are hidden
      // when no description should be added.
      // @todo: div.form-item-captcha-description depends on theming, maybe
      // it's better to add our own wrapper with id (instead of a class).
      $("#edit-captcha-add-captcha-description").click(function() {
        if ($("#edit-captcha-add-captcha-description").is(":checked")) {
          // Show the CAPTCHA description textfield(s).
          $("div.form-item-captcha-description").show('slow');
        }
        else {
          // Hide the CAPTCHA description textfield(s).
          $("div.form-item-captcha-description").hide('slow');
        }
      });
      // Hide the CAPTCHA description textfields if option is disabled on page load.
      if (!$("#edit-captcha-add-captcha-description").is(":checked")) {
        $("div.form-item-captcha-description").hide();
      }
    }

  };

})(jQuery);
;
(function($){Drupal.googleanalytics={};$(document).ready(function(){$(document.body).bind("mousedown keyup touchstart",function(event){$(event.target).closest("a,area").each(function(){if(Drupal.googleanalytics.isInternal(this.href))if($(this).is(".colorbox")&&Drupal.settings.googleanalytics.trackColorbox);else if(Drupal.settings.googleanalytics.trackDownload&&Drupal.googleanalytics.isDownload(this.href))ga("send",{"hitType":"event","eventCategory":"Downloads","eventAction":Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(),
"eventLabel":Drupal.googleanalytics.getPageUrl(this.href),"transport":"beacon"});else{if(Drupal.googleanalytics.isInternalSpecial(this.href))ga("send",{"hitType":"pageview","page":Drupal.googleanalytics.getPageUrl(this.href),"transport":"beacon"})}else if(Drupal.settings.googleanalytics.trackMailto&&$(this).is("a[href^='mailto:'],area[href^='mailto:']"))ga("send",{"hitType":"event","eventCategory":"Mails","eventAction":"Click","eventLabel":this.href.substring(7),"transport":"beacon"});else if(Drupal.settings.googleanalytics.trackOutbound&&
this.href.match(/^\w+:\/\//i))if(Drupal.settings.googleanalytics.trackDomainMode!==2||Drupal.settings.googleanalytics.trackDomainMode===2&&!Drupal.googleanalytics.isCrossDomain(this.hostname,Drupal.settings.googleanalytics.trackCrossDomains))ga("send",{"hitType":"event","eventCategory":"Outbound links","eventAction":"Click","eventLabel":this.href,"transport":"beacon"})})});if(Drupal.settings.googleanalytics.trackUrlFragments)window.onhashchange=function(){ga("send",{"hitType":"pageview","page":location.pathname+
location.search+location.hash})};if(Drupal.settings.googleanalytics.trackColorbox)$(document).bind("cbox_complete",function(){var href=$.colorbox.element().attr("href");if(href)ga("send",{"hitType":"pageview","page":Drupal.googleanalytics.getPageUrl(href)})})});Drupal.googleanalytics.isCrossDomain=function(hostname,crossDomains){if(!crossDomains)return false;else return $.inArray(hostname,crossDomains)>-1?true:false};Drupal.googleanalytics.isDownload=function(url){var isDownload=new RegExp("\\.("+
Drupal.settings.googleanalytics.trackDownloadExtensions+")([?#].*)?$","i");return isDownload.test(url)};Drupal.googleanalytics.isInternal=function(url){var isInternal=new RegExp("^(https?)://"+window.location.host,"i");return isInternal.test(url)};Drupal.googleanalytics.isInternalSpecial=function(url){var isInternalSpecial=new RegExp("(/go/.*)$","i");return isInternalSpecial.test(url)};Drupal.googleanalytics.getPageUrl=function(url){var extractInternalUrl=new RegExp("^(https?)://"+window.location.host,
"i");return url.replace(extractInternalUrl,"")};Drupal.googleanalytics.getDownloadExtension=function(url){var extractDownloadextension=new RegExp("\\.("+Drupal.settings.googleanalytics.trackDownloadExtensions+")([?#].*)?$","i");var extension=extractDownloadextension.exec(url);return extension===null?"":extension[1]}})(jQuery);;
