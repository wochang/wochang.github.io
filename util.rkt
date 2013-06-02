#lang racket

(require ;scribble/base
 scribble/core
 scribble/html-properties
 ;scribble/manual
 ;scribble/decode
 )

(provide (all-defined-out))

; 1) Place the following code where you'd like Disqus to load: 
;    <div id="disqus_thread"></div>
;    <script type="text/javascript">
;        /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
;        var disqus_shortname = 'wochang'; // required: replace example with your forum shortname
;
;        /* * * DON'T EDIT BELOW THIS LINE * * */
;        (function() {
;            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
;            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
;            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
;        })();
;    </script>
;    <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
;    <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>
    
(define DISQUS_SHORTNAME "wochang")

(define (end-post post-id)
;  (match-define (list year month day code) (current-finfo))
;  (define src-filename code)
;  (define actual-filename (format "~a-post.html" (current-tag)))
  (element
   (style #f (list (alt-tag "div")
                      (attributes
                       (list (cons 'id "disqus_thread")))))
   ;; XXX add script
   (element
    (style
     #f
     (list
      (script-property
       "text/javascript"
       (list (format "var disqus_shortname = '~a';\n" DISQUS_SHORTNAME)
             (format "var disqus_identifier = '~a';\n" post-id)
;             (format "var disqus_identifier = '~a/blog/~a/~a/~a/~a/';\n"
;                     *BLOG-URL* year month day src-filename)
;             (format "var disqus_url = '~a/~a';\n"
;                     *BLOG-URL* actual-filename)
             "var disqus_script = 'embed.js';\n"
             "(function () {\n"
             "var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;\n"
             "dsq.src = 'http://' + disqus_shortname + '.disqus.com/' + disqus_script;\n"
             "(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);\n"
             "}());\n"))))
   (list "Please enable JavaScript to view the "
         "comments powered by Disqus."))))

(define style:table
  (style #f (list (attributes
                   (list (cons 'class "boxed")
                         (cons 'border "1"))))))
(define style:subsec 'unnumbered)

