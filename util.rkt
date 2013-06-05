#lang racket

(require scribble/base ; subsection
         scribble/core
         scribble/html-properties
          ;scribble/manual
 ;scribble/decode
         (for-syntax syntax/parse)
;         syntax/parse
         )

(provide (all-defined-out))

;; ------------------------------ Google Analytics ----------------------------
;<script>
;  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
;  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
;  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
;  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
;
;  ga('create', 'UA-41477073-1', 'wochang.github.io');
;  ga('send', 'pageview');
;
;</script>

(define (google-analytics . more)
  (style #f
    (append more
            (list
             #;(head-extra
              `(link ([href "atom.xml"]
                      [rel "alternate"]
                      [title ,*BLOG-TITLE*]
                      [type "application/atom+xml"])))
             (head-extra
              `(script ([type "text/javascript"])
                       ,(format
 "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', '~a', 'wochang.github.io');
  ga('send', 'pageview');"
;                       ,(format "var _gaq = _gaq || [];
;_gaq.push(['_setAccount', '~a']);
;_gaq.push(['_trackPageview']);
;
;(function() {
;var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
;ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
;var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
;})();"
                                *BLOG-GA-ACCOUNT*)))))))

(define *BLOG-GA-ACCOUNT* "UA-41477073-1")

;; -------------------- Disqus ------------------------------------------------
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
(define style:subsec (list 'unnumbered 'hidden))
#;(define style:sec (list 'hidden))

(define bullet:subsec "♦")
(define bullet:subsubsec "•")

#;(define-syntax (sec stx)
  (syntax-parse stx
    [(sec (~optional (~seq #:toc-name toc-name:expr))
             sec-title:expr ...)
  #`(begin
      (section
       #:style style:sec
       #,@(if (attribute toc-name) #'(toc-name) #'(sec-title ...)))
      (bold sec-title ...))]))

(define-syntax (subsec stx)
  (syntax-parse stx
    [(subsec (~optional (~seq #:toc-name toc-name:expr))
             subsec-title:expr ...)
  #`(begin
      (subsection #:style style:subsec 
                  (hspace 1) bullet:subsec " "
                  #,@(if (attribute toc-name) #'(toc-name) #'(subsec-title ...)))
      (bold subsec-title ...))]))

(define-syntax (subsubsec stx)
  (syntax-parse stx
    [(subsubsec (~optional (~seq #:toc-name toc-name:expr))
                subsubsec-title:expr ...)
  #`(begin
      (subsubsection #:style style:subsec 
                     (hspace 2)  bullet:subsubsec " "
                     #,@(if (attribute toc-name) #'(toc-name) #'(subsubsec-title ...)))
      (smaller (bold subsubsec-title ...)))]))
