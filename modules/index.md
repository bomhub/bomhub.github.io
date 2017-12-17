---
layout: default
---
<div>
    <h2>Modules by designer</h2>
    <ul>
    {% assign pages = site.pages  | where: 'layout', 'designer' | sort: 'designer' %}
    {% for group in pages %}
      <li><a href="{{ group.url | prepend: site.baseurl }}">{{group.designer}}</a></li>
    {% endfor %}
    </ul>
</div>