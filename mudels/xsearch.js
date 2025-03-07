#name=MultiSearch

#!desc=多重搜索

#!homepage=https://whatshub.top

#!author=deezertidal

#!icon=https://raw.githubusercontent.com/deezertidal/private/main/icons/multisearch.png



# 自用 请根据需求自行修改

# 默认Google搜索

# wk+空格+关键词(维基百科)

# bd+空格+关键词(百度)

# gh+空格+关键词(GitHub)

# gi+空格+关键词(Google 图片)

# yd+空格+关键词(有道词典)

# trc+空格+关键词(Google 译至中)

# tre+空格+关键词(Google 译至英)

# db+空格+关键词(豆瓣)

# zh+空格+关键词(知乎)

# wb+空格+关键词(微博)

# ddg+空格+关键词(DuckDuckGo)

# bi+空格+关键词(Bing)



[URL Rewrite]

^https:\/\/www\.google\.com\/search\?q=gpt(\+|%20)([^&]+).+ https://chatgpt.com/?q=$2 302

^https:\/\/www\.google\.com\/search\?q=gen(\+|%20)([^&]+).+ https://www.genspark.ai/search?q=$2 302

^https:\/\/www\.google\.com\/search\?q=gh(\+|%20)([^&]+).+ https://github.com/search?type=code&q=$2 302

^https:\/\/www\.google\.com\/search\?q=gi(\+|%20)([^&]+).+ https://chat.openai.com/?sso=$2 302

^https:\/\/www\.google\.com\/search\?q=yd(\+|%20)([^&]+).+ ‎‏https://yandex.com/images/touch/search?lr=21467&text=$2 302

^https:\/\/www\.google\.com\/search\?q=exa(\+|%20)([^&]+).+ https://exa.ai/search?q=$2 302

^https:\/\/www\.google\.com\/search\?q=alo(\+|%20)([^&]+).+ https://alohafind.com/search/?q=$2 302

^https:\/\/www\.google\.com\/search\?q=db(\+|%20)([^&]+).+ https://dsearch.com/search?q=$2 302

^https:\/\/www\.google\.com\/search\?q=zh(\+|%20)([^&]+).+ https://yandex.com/images/touch/search?lr=21467&text=$2 302

^https:\/\/www\.google\.com\/search\?q=ru(\+|%20)([^&]+).+ https://ya.ru/search/?text=$2 302

^https:\/\/www\.google\.com\/search\?git=cod(\+|%20)([^&]+).+ https://gist.github.com/search?q=$2 302

^https:\/\/www\.google\.com\/search\?q=ka(\+|%20)([^&]+).+ https://kagi.com/search?q=$2 302


[MITM]

hostname = %APPEND% www.google.com