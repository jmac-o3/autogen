"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3881],{1576:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(85893),i=t(11151);const o={custom_edit_url:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_group_chat_with_llamaindex_agents.ipynb",description:"Integrate llamaindex agents with Autogen.",source_notebook:"/notebook/agentchat_group_chat_with_llamaindex_agents.ipynb",tags:["react","llama index","software engineering"],title:"Groupchat with Llamaindex agents"},s="Groupchat with Llamaindex agents",l={id:"notebooks/agentchat_group_chat_with_llamaindex_agents",title:"Groupchat with Llamaindex agents",description:"Integrate llamaindex agents with Autogen.",source:"@site/docs/notebooks/agentchat_group_chat_with_llamaindex_agents.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_group_chat_with_llamaindex_agents",permalink:"/autogen/docs/notebooks/agentchat_group_chat_with_llamaindex_agents",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_group_chat_with_llamaindex_agents.ipynb",tags:[{label:"react",permalink:"/autogen/docs/tags/react"},{label:"llama index",permalink:"/autogen/docs/tags/llama-index"},{label:"software engineering",permalink:"/autogen/docs/tags/software-engineering"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_group_chat_with_llamaindex_agents.ipynb",description:"Integrate llamaindex agents with Autogen.",source_notebook:"/notebook/agentchat_group_chat_with_llamaindex_agents.ipynb",tags:["react","llama index","software engineering"],title:"Groupchat with Llamaindex agents"},sidebar:"notebooksSidebar",previous:{title:"Currency Calculator: Task Solving with Provided Tools as Functions",permalink:"/autogen/docs/notebooks/agentchat_function_call_currency_calculator"},next:{title:"Group Chat",permalink:"/autogen/docs/notebooks/agentchat_groupchat"}},r={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Set your API Endpoint",id:"set-your-api-endpoint",level:2},{value:"Set Llamaindex",id:"set-llamaindex",level:2},{value:"Create agents",id:"create-agents",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"groupchat-with-llamaindex-agents",children:"Groupchat with Llamaindex agents"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://colab.research.google.com/github/microsoft/autogen/blob/main/notebook/agentchat_group_chat_with_llamaindex_agents.ipynb",children:(0,a.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,a.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_group_chat_with_llamaindex_agents.ipynb",children:(0,a.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://docs.llamaindex.ai/en/stable/optimizing/agentic_strategies/agentic_strategies/",children:"Llamaindex\nagents"}),"\nhave the ability to use planning strategies to answer user questions.\nThey can be integrated in Autogen in easy ways"]}),"\n",(0,a.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"! pip install pyautogen\n! pip install llama-index\n! pip install llama-index-tools-wikipedia\n! pip install llama-index-readers-wikipedia\n! pip install wikipedia\n"})}),"\n",(0,a.jsx)(n.h2,{id:"set-your-api-endpoint",children:"Set your API Endpoint"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import os\n\nimport autogen\n\nconfig_list = [{"model": "gpt-3.5-turbo-0125", "api_key": os.getenv("OPENAI_API_KEY")}]\n'})}),"\n",(0,a.jsx)(n.h2,{id:"set-llamaindex",children:"Set Llamaindex"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from llama_index.core import Settings\nfrom llama_index.core.agent import ReActAgent\nfrom llama_index.embeddings.openai import OpenAIEmbedding\nfrom llama_index.llms.openai import OpenAI\nfrom llama_index.tools.wikipedia import WikipediaToolSpec\n\nllm = OpenAI(\n    model="gpt-3.5-turbo-0125",\n    temperature=0.0,\n    api_key=os.environ.get("OPENAPI_API_KEY", ""),\n)\n\nembed_model = OpenAIEmbedding(\n    model="text-embedding-ada-002",\n    temperature=0.0,\n    api_key=os.environ.get("OPENAPI_API_KEY", ""),\n)\n\nSettings.llm = llm\nSettings.embed_model = embed_model\n\n# create a react agent to use wikipedia tool\nwiki_spec = WikipediaToolSpec()\n# Get the search wikipedia tool\nwikipedia_tool = wiki_spec.to_tool_list()[1]\n\nlocation_specialist = ReActAgent.from_tools(tools=[wikipedia_tool], llm=llm, max_iterations=10, verbose=True)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"create-agents",children:"Create agents"}),"\n",(0,a.jsx)(n.p,{children:"In this example, we will create a Llamaindex agent to answer questions\nfecting data from wikipedia and a user proxy agent."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from llamaindex_conversable_agent import LLamaIndexConversableAgent\n\nllm_config = {\n    "temperature": 0,\n    "config_list": config_list,\n}\n\ntrip_assistant = LLamaIndexConversableAgent(\n    "trip_specialist",\n    llama_index_agent=location_specialist,\n    system_message="You help customers finding more about places they would like to visit. You can use external resources to provide more details as you engage with the customer.",\n    description="This agents helps customers discover locations to visit, things to do, and other details about a location. It can use external resources to provide more details. This agent helps in finding attractions, history and all that there si to know about a place",\n)\n\nuser_proxy = autogen.UserProxyAgent(\n    name="Admin",\n    human_input_mode="ALWAYS",\n    code_execution_config=False,\n)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Next, let\u2019s set up our group chat."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'groupchat = autogen.GroupChat(\n    agents=[trip_assistant, user_proxy],\n    messages=[],\n    max_round=500,\n    speaker_selection_method="round_robin",\n    enable_clear_history=True,\n)\nmanager = autogen.GroupChatManager(groupchat=groupchat, llm_config=llm_config)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'chat_result = user_proxy.initiate_chat(\n    manager,\n    message="""\nWhat can i find in Tokyo related to Hayao Miyazaki and its moveis like Spirited Away?.\n""",\n)\n'})})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var a=t(67294);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);