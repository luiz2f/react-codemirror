"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1056],{31056:(n,t,e)=>{e.r(t),e.d(t,{default:()=>s});const s="FROM mono:3.12\n\nENV KRE_FEED https://www.myget.org/F/aspnetvnext/api/v2\nENV KRE_USER_HOME /opt/kre\n\nRUN apt-get -qq update && apt-get -qqy install unzip \n\nONBUILD RUN curl -sSL https://raw.githubusercontent.com/aspnet/Home/dev/kvminstall.sh | sh\nONBUILD RUN bash -c \"source $KRE_USER_HOME/kvm/kvm.sh \\\n    && kvm install latest -a default \\\n    && kvm alias default | xargs -i ln -s $KRE_USER_HOME/packages/{} $KRE_USER_HOME/packages/default\"\n\n# Install libuv for Kestrel from source code (binary is not in wheezy and one in jessie is still too old)\nRUN apt-get -qqy install \\\n    autoconf \\\n    automake \\\n    build-essential \\\n    libtool \nRUN LIBUV_VERSION=1.0.0-rc2 \\\n    && curl -sSL https://github.com/joyent/libuv/archive/v${LIBUV_VERSION}.tar.gz | tar zxfv - -C /usr/local/src \\\n    && cd /usr/local/src/libuv-$LIBUV_VERSION \\\n    && sh autogen.sh && ./configure && make && make install \\\n    && rm -rf /usr/local/src/libuv-$LIBUV_VERSION \\\n    && ldconfig\n\nENV PATH $PATH:$KRE_USER_HOME/packages/default/bin\n\n# Extra things to test\nRUN echo \"string at end\"\nRUN echo must work 'some str' and some more\nRUN echo hi this is # not a comment\nRUN echo 'String with ${VAR} and another $one here'"}}]);
//# sourceMappingURL=1056.ae50035d.chunk.js.map